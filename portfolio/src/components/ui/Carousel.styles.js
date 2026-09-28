import styled from 'styled-components'

export const SliderWrap = styled.div`
  .swiper {
    padding: 12px 4px 56px;
  }

  .swiper-slide {
    height: auto;
  }

  /* The dots under the slider */
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.muted};
    opacity: 0.35;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 28px;
    border-radius: 6px;
    background: ${({ theme }) => theme.gradient};
    opacity: 1;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
`
