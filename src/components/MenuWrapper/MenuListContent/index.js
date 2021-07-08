import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Spinner from "../../Spinner"

const SoupeMenu = lazy(() => import("../SoupeMenu"))
const PizzaMenu = lazy(() => import("../PizzaMenu"))
const PastaMenu = lazy(() => import("../PastaMenu"))
const DesertMenu = lazy(() => import("../DesertMenu"))
const WineMenu = lazy(() => import("../WineMenu"))
const BeerMenu = lazy(() => import("../BeerMenu"))
const DrinksMenu = lazy(() => import("../DrinksMenu"))

const MenuListContent = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/menu/soupe" component={SoupeMenu} />
          <Route exact path="/menu" component={PizzaMenu} />
          <Route path="/menu/pasta" component={PastaMenu} />
          <Route path="/menu/desert" component={DesertMenu} />
          <Route path="/menu/wine" component={WineMenu} />
          <Route path="/menu/beer" component={BeerMenu} />
          <Route path="/menu/drinks" component={DrinksMenu} />
        </Switch>
      </Suspense>
    </>
  )
}

export default MenuListContent
