import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/pagination'

import IconButton from './IconButton'
import { Controls, SliderWrap } from './Carousel.styles'

// How many slides are visible, by minimum screen width (px)
const DEFAULT_SLIDES_PER_VIEW = { 0: 1.12, 640: 2, 1024: 3 }

/**
 * Reusable slider (built on Swiper) with arrows, dots, autoplay, swipe and keyboard support.
 *
 *   <Carousel
 *     items={projects}
 *     getKey={(project) => project.key}
 *     renderItem={(project) => <ProjectCard project={project} />}
 *   />
 *
 * slidesPerView: visible slides per screen width, e.g. { 0: 1, 768: 2 }
 * paused:        stop auto-sliding (e.g. while a modal is open)
 * children:      extra content shown between the arrows (e.g. a "More on GitHub" button)
 */
export default function Carousel({
  items,
  getKey,
  renderItem,
  slidesPerView = DEFAULT_SLIDES_PER_VIEW,
  gap = 20,
  autoplayDelay = 4500,
  paused = false,
  prevLabel = 'Previous',
  nextLabel = 'Next',
  children,
}) {
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    if (!swiper?.autoplay) return
    if (paused) swiper.autoplay.stop()
    else swiper.autoplay.start()
  }, [paused, swiper])

  // { 640: 2 }  ->  { 640: { slidesPerView: 2 } }  (the format Swiper expects)
  const breakpoints = Object.fromEntries(
    Object.entries(slidesPerView).map(([width, count]) => [width, { slidesPerView: count }]),
  )

  return (
    <>
      <SliderWrap>
        <Swiper
          modules={[A11y, Autoplay, Keyboard, Pagination]}
          onSwiper={setSwiper}
          breakpoints={breakpoints}
          spaceBetween={gap}
          grabCursor
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          a11y={{ prevSlideMessage: prevLabel, nextSlideMessage: nextLabel }}
        >
          {items.map((item) => (
            <SwiperSlide key={getKey(item)}>{renderItem(item)}</SwiperSlide>
          ))}
        </Swiper>
      </SliderWrap>

      <Controls>
        <IconButton icon={HiArrowLeft} label={prevLabel} shape="circle" size={48} onClick={() => swiper?.slidePrev()} />
        {children}
        <IconButton icon={HiArrowRight} label={nextLabel} shape="circle" size={48} onClick={() => swiper?.slideNext()} />
      </Controls>
    </>
  )
}
