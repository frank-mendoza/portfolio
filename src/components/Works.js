import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from 'react-router-dom'

import Button from '../customComponents/Button'
import data from '../data'


const Works = ({ onActiveTav, ...props }) => {

  let all = props.tab.all
  let branding = props.tab.branding
  let creative = props.tab.creative
  let reactjs = props.tab.reactjs

  const WorkItem = () => {

    let record = []
    let slicedata = data.slice(0, 6)

    window.location.pathname === '/works' ? record = data : record = slicedata

    if (data.length == 0) {
      return <span>No records found</span>
    } else {
      if (all) {
        return record.map((item, key) => {

          let src = item.src
          
          return (
            <CustomItem
              key={key}
              src={src}
              alt={item.alt}
              title={item.title}
              client={item.client}
            />
          )
        })
      }
      else if (branding) {
        return record.filter((e) => e.type == 1).map((item, key) => {
          
          return (
            <CustomItem
              key={key}
              src={item.src}
              alt={item.alt}
              title={item.title}
              client={item.client}
            />
          )
        })
      }
      else if (creative) {
        return record.filter((e) => e.type == 2).map((item, key) => {
          
          return (
            <CustomItem
              key={key}
              src={item.src}
              alt={item.alt}
              title={item.title}
              client={item.client}
            />
          )
        })
      }
      else if (reactjs) {
        return record.filter((e) => e.type == 3).map((item, key) => {
          
          return (
            <CustomItem
              key={key}
              src={item.src}
              alt={item.alt}
              title={item.title}
              client={item.client}
            />
          )
        })
      }
    }

  }

  const CustomItem = ({ src, alt, title, client }) => (
    <div
      className="works__item"
      style={{ opacity: !props.loading ? 0 : 1, transition: 'ease-in 1s' }}
    >
      <img src={src} alt={alt} />
      <div className="works__description">
        <a href='/' className='works__description-title'>{title}</a>
        <p className='works__description-client'>{client}</p>
      </div>
    </div>
  )

  const showButton = () => {
    return  props.worksroute || data.length == 0 ? null :
        <Link className="works__button" to='/works'>
          <Button name='See all' onClick={null} />
        </Link>

  }

  return (
    <AnimationOnScroll
      initiallyVisible={true}
      animateIn="animate__bounceInUp"
      animateOnce={true}
    >

      <div className="works" id='works' ref={props.location}>
        <h2 className="title">Works</h2>
        <div className="works__tablinks">
          <ul className="works__filter list">
            <li className="active" data-filter="*" onClick={() => onActiveTav("all")}>All Categories</li>
            <li data-filter=".brand" onClick={() => onActiveTav("branding")}>Branding</li>
            <li data-filter=".work" onClick={() => onActiveTav("creative")}>Creative Work </li>
            <li data-filter=".web" onClick={() => onActiveTav("reactjs")}>ReactJS</li>
          </ul>
        </div>
        <div className="works__container">

          {!props.loading ? <div style={{ textAlign: 'center', fontWeight: '700' }}>...loading</div> :
            WorkItem()}
        </div>
        {showButton()}
      </div>
    </AnimationOnScroll>
  )
}

export default Works