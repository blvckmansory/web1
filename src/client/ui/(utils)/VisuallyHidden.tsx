import type { PropsWithChildren } from 'react'

const VisuallyHidden = ({ children }: PropsWithChildren) => <div className="hidden">{children}</div>

export { VisuallyHidden }
