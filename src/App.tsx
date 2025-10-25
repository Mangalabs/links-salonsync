import { motion } from 'framer-motion'
import { Globe, MessageCircle, Instagram, Mail } from 'lucide-react'

export default function App() {
  const links = [
    {
      title: 'Acessar Plataforma',
      url: 'https://salonsync.mangalab.io',
      icon: Globe,
      styles: {
        button:
          'bg-[#f0b85d]/10 border-2 border-[#f0b85d] hover:bg-[#f0b85d]/20 hover:border-[#f0b85d] hover:shadow-[0_15px_35px_rgba(240,184,93,0.5)]',
        icon: 'text-[#f0b85d] group-hover:scale-125 group-hover:rotate-6 group-hover:drop-shadow-[0_0_8px_rgba(240,184,93,0.8)]',
      },
    },
    {
      title: 'WhatsApp Suporte',
      url: 'https://wa.me/5585992961295?text=Olá! Gostaria de saber mais sobre o SalonSync.',
      icon: MessageCircle,
      styles: {
        button:
          'bg-[#25d366]/10 border-2 border-[#25d366] hover:bg-[#25d366]/20 hover:border-[#25d366] hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)]',
        icon: 'text-[#25d366] group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]',
      },
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/salonsyncofc',
      icon: Instagram,
      styles: {
        button:
          'bg-[#e1306c]/10 border-2 border-[#e1306c] hover:bg-[#e1306c]/20 hover:border-[#e1306c] hover:shadow-[0_15px_35px_rgba(225,48,108,0.5)]',
        icon: 'text-[#e1306c] group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.8)]',
      },
    },
    {
      title: 'E-mail Comercial',
      url: 'mailto:contato@mangalab.io',
      icon: Mail,
      styles: {
        button:
          'bg-[#4a90e2]/10 border-2 border-[#4a90e2] hover:bg-[#4a90e2]/20 hover:border-[#4a90e2] hover:shadow-[0_15px_35px_rgba(74,144,226,0.5)]',
        icon: 'text-[#4a90e2] group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(74,144,226,0.8)]',
      },
    },
  ]

  return (
    <div className='h-screen relative overflow-hidden bg-black'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-[#666060] to-black opacity-90' />

        <motion.div
          className='absolute inset-0 bg-gradient-to-tr from-[#f0b85d]/20 via-transparent to-[#f0b85d]/20'
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />

        <motion.div
          className='absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-[#f0b85d]/10 rounded-full blur-3xl'
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className='absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-[#666060]/20 rounded-full blur-3xl'
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 35px, #f0b85d 35px, #f0b85d 36px),
              repeating-linear-gradient(-45deg, transparent, transparent 35px, #f0b85d 35px, #f0b85d 36px)
            `,
          }}
        />

        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient opacity-30'
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(240, 184, 93, 0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className='relative z-10 h-screen flex flex-col'>
        <div className='flex-1 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8'>
          <div className='w-full max-w-md lg:max-w-xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-6 sm:mb-8 lg:mb-10'>
              <motion.div
                className='relative w-42 h-42 mx-auto mb-6'
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}>
                <motion.div
                  className='absolute inset-0 rounded-full bg-gradient-to-tr from-[#f0b85d] via-[#e5e5e5] to-[#f0b85d]'
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    filter: 'blur(8px)',
                    opacity: 0.4,
                  }}
                />

                <div
                  className='absolute inset-2 rounded-full bg-gradient-to-br from-[#4b4b4b] to-[#9e9e9e]
flex items-center justify-center border-4 border-[#a0a0a0] shadow-2xl shadow-[#a0a0a0]/50 overflow-hidden'>
                  <img
                    src='/icon-salon.png'
                    alt='SalonSync Logo'
                    className='w-full h-full object-contain p-6'
                  />
                </div>
              </motion.div>

              <motion.h1
                className='text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 bg-gradient-to-r from-[#f0b85d] via-white to-[#f0b85d] bg-clip-text text-transparent'
                style={{ fontWeight: 700, backgroundSize: '200% auto' }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}>
                SalonSync
              </motion.h1>

              <p className='text-[#e5e5e5] text-sm sm:text-base mb-1 sm:mb-2'>
                Dashboard Administrativo
              </p>
              <p className='text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed px-2 sm:px-4'>
                Gestão completa para salões e barbearias modernas
              </p>
            </motion.div>

            <div className='space-y-2.5 sm:space-y-3 lg:space-y-4'>
              {links.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    group relative block px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 
                    rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ease-out 
                    hover:-translate-y-1.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]
                    ${link.styles.button}
                  `}
                  style={{ backdropFilter: 'blur(10px)' }}>
                  <div className='relative flex items-center justify-center gap-3'>
                    <link.icon className={`w-5 h-5 ${link.styles.icon}`} />
                    <span className='text-white text-sm lg:text-base'>
                      {link.title}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='text-center py-4 sm:py-5 border-t border-[#727272]/50'>
          <p className='text-[10px] sm:text-xs lg:text-sm text-[#727272]'>
            © 2025 MangaLab. Todos os direitos reservados.
          </p>
          <p className='text-[9px] sm:text-xs text-[#555] mt-1'>
            Desenvolvido com
            <img
              src='/icon-copyright.png'
              alt='amor'
              className='h-2 w-2 inline m-1'
              aria-hidden='true'
            />
            pela equipe{' '}
            <a
              href='https://www.mangalab.io'
              target='_blank'
              className='text-yellow-400 hover:text-yellow-500 transition-colors'>
              MangaLab
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
