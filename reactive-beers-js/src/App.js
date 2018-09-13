import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Beers from './beer/Beers'
import RandBeer from './beer/RandBeer'
import NewBeer from './beer/NewBeer'

const Application = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandBeer} />
          <Route path="/new-beer" component={NewBeer} />

          <Route
            render={() => {
              return (
                <div>
                  <Link to="/beers">All Beers</Link>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis, voluptate ex est similique laboriosam quos a ullam. Cumque dolorem exercitationem laboriosam ipsam eveniet! Excepturi voluptatem facilis tempore iste debitis.</p>
                  <br />
                  <Link to="/random-beer">Random Beer</Link>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo eligendi, culpa incidunt officia repudiandae neque! Natus tempora nemo nam consectetur, placeat quidem, at illum et molestiae laudantium sint unde explicabo.</p>
                  <br />
                  <Link to="/new-beer">New Beer</Link>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore adipisci! Magnam optio nulla quia veniam magni eos reiciendis animi iste, veritatis neque cupiditate eligendi quasi sit voluptatibus? Nisi, tempora?</p>
                </div>
              )
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Application
