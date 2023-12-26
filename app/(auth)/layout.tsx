import CenterWrapper from '@/components/center-wrapper'
import { Logo } from './_components/logo'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <CenterWrapper>
            <Logo />
            {children}
        </CenterWrapper>
    )
}