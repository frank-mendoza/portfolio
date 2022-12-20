import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../customComponents/Button'
import data from '../data'


const Works = ({ onActiveTav, ...props }) => {

  let all = props.tab.all
  let branding = props.tab.branding
  let creative = props.tab.creative
  let reactjs = props.tab.reactjs

  let slicedata = data.slice(0, 6)

  const WorkItem = () => {

    let record = []

    window.location.pathname === '/portfolio/works' ? record = data : record = slicedata

    if (data.length === 0) {
      return <span>No records found</span>
    } else {
      if (all) {
        return record.map((item, key) => {
          return (
            <CustomItem
              key={key}
              item={item}
            />
          )
        })
      }
      else if (branding) {
        return record.filter((e) => e.type === 1).map((item, key) => {
          return (
            <CustomItem
              key={key}
              item={item}
            />
          )
        })
      }
      else if (creative) {
        return record.filter((e) => e.type === 2).map((item, key) => {
          return (
            <CustomItem
              key={key}
              item={item}
            />
          )
        })
      }
      else if (reactjs) {
        return record.filter((e) => e.type === 3).map((item, key) => {
          
          return (
            <CustomItem
              key={key}
              item={item}
            />
          )
        })
      }
    }

  }

  const CustomItem = ({ item}) => (
    <div
      className={data.length < 2 ? 'works__item single' : 'works__item'}
      style={{ opacity: !props.loading ? 0 : 1, transition: 'ease-in 1s' }}
    >
      <img src={item.src} alt={item.alt} />
      <div className="works__description">
        <a href='/portfolio' className='works__description-title'>{item.title}</a>
        <p className='works__description-client'>{item.client}</p>
      </div>
    </div>
  )

  const showButton = () => {
    return  props.worksroute || data.length === 0 ? null :
        <Link className="works__button" to='/portfolio/works' onClick={() => props.resetWorks()}>
          <Button name='See all'  />
        </Link>

  }

  return (
    <div className={!props.dark ? 'wrapper' : 'wrapper dark'}>
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
        <div className={data.length < 2 ? "works__container single" : 'works__container'}>

          {!props.loading ? <div style={{ textAlign: 'center', fontWeight: '700' }}>...loading</div> :
            WorkItem()}
        </div>
        {showButton()}
      </div>
    </div>
  )
}

export default Works