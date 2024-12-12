import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="services">
      <div className='pt-0 pb-36'>
        <BentoGrid>
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
        </div>
    </section>
  )
}

export default Grid
