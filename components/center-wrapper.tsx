export default function CenterWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid place-items-center space-y-6">
            {children}
        </div>
    )
}