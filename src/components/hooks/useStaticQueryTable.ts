import { graphql, StaticQueryDocument, useStaticQuery } from 'gatsby';
import React from 'react'

const horizontalLineRegex = /^[| -]+$/

export interface TableIterationOptions {
    readonly leftBound: boolean
    readonly rightBound: boolean
}

export interface ArrayTable<Title extends string, Value> {
    readonly headers: readonly Title[]
    readonly rows: MaybeAsyncIterable<readonly Value[]>
}

type MaybeAsyncIterable<X> = Iterable<X> | AsyncIterable<X>

export default function useStaticQueryTable(query: StaticQueryDocument, keyString?: string) {
    const { remark } = useStaticQuery(query)

    console.log("remark", remark)
    return remark
}

export function createMarkdownArrayTableSync(text: string) {
    const lines = [...text.split('\n')].map(s => s.trim())
    if (lines[0] === '') lines.shift()
    if (lines[lines.length - 1] === '') lines.pop()

    if (lines.length === 0) {
        throw new SyntaxError('Text is empty')
    }

    const headers = lines[0].split('|').map(x => x.trim())
    const leftBound = headers[0] === ''
    const rightBound = headers[headers.length - 1] === ''
    if (leftBound) headers.shift()
    if (rightBound) headers.pop()

    const rows = iterateRowsSync(lines.slice(1), { leftBound, rightBound })

    return new MarkdownCellTableSync(headers, rows)
}

export class MarkdownCellTableSync implements ArrayTable<string, string> {
    constructor(
        public readonly headers: readonly string[],
        public readonly rows: IterableIterator<readonly string[]>,
    ) { }
}

export function* iterateRowsSync(lines: Iterable<string>, options: TableIterationOptions) {
    const { leftBound, rightBound } = options

    for (const line of lines) {
        const trimmedLine = line.trim()
        if (horizontalLineRegex.test(trimmedLine)) continue

        const row = trimmedLine.split('|').map(x => x.trim())

        if (leftBound && row.shift() !== '') {
            throw new SyntaxError('Inconsistent left bound')
        }

        if (rightBound && row.pop() !== '') {
            throw new SyntaxError('Inconsistent right bound')
        }

        yield row
    }
}