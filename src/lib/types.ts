import type { Metadata, ResolvingMetadata } from 'next'

type nullable<T> = T | null | undefined
type AnyObject = {
	[x: string | number | symbol]: unknown
}
type ArrowFunction<P extends Array<unknown> = [], R = unknown> = (...args: P) => R

type As = React.ElementType<any>
type ReactPropsOf<T extends As> = React.ComponentPropsWithoutRef<T>
type ReactChildren = React.ReactNode | React.ReactNode[] | undefined | null | string
type MergeWithHTMLProps<T extends As, P = {}> = Omit<ReactPropsOf<T>, keyof P> &
	P & {
		as?: As
	}

type StyleProps = Partial<{
	className: string
	style: React.CSSProperties
}>

type Layout = (props: { children: ReactChildren }) => React.ReactNode

type PageProps<P = {}, S = {}> = {
	params: P
	searchParams: S
}
type Page<P = {}, S = {}> = (
	props: PageProps<P, S>,
) => Promise<React.ReactElement<PageProps<P, S>>> | React.ReactElement<PageProps<P, S>>
type GenerateMetadata<P = {}, S = {}> = (
	props: PageProps<P, S>,
	parent?: ResolvingMetadata,
) => Promise<Metadata> | Metadata

type FormProps<Values = unknown> = StyleProps &
	Partial<{
		formId: string
		initialValues: Partial<Values>

		readOnly: boolean

		onSubmit: (values: Values) => Promise<any> | any
		onCancel: (values: Values) => Promise<unknown> | unknown
	}>

export type {
	As,
	Page,
	Layout,
	nullable,
	AnyObject,
	FormProps,
	StyleProps,
	ReactPropsOf,
	ReactChildren,
	ArrowFunction,
	GenerateMetadata,
	MergeWithHTMLProps,
}
