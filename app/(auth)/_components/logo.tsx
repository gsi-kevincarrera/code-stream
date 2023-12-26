import Image from 'next/image'
import {Poppins} from 'next/font/google'
import {cn} from '@/lib/utils'

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300','400', '500', '600', '700', '800']
})

export const Logo = () => {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <figure className='bg-white rounded-full p-1'>
                <Image
                    src={'/CodeStreamLogo.jpg'}
                    alt={'CodeStream logo'}
                    width={80}
                    height={80}
                />
            </figure>
            <div className={cn('flex flex-col items-center', font.className)}>
                <p className={cn('text-xl font-semibold', font.className)}>
                    CodeStream
                </p>
                <p className='text-sm text-muted-foreground'>
                    Let&apos;s code
                </p>
            </div>
        </div>
    )
}