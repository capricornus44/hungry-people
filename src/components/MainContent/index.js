import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Spinner from "../Spinner"

const HomePage = lazy(() => import("../../pages/HomePage"))
const AboutPage = lazy(() => import("../../pages/AboutPage"))
const TeamPage = lazy(() => import("../../pages/TeamPage"))
const BookingPage = lazy(() => import("../../pages/BookingPage"))
const MenuPage = lazy(() => import("../../pages/MenuPage"))
const EventsPage = lazy(() => import("../../pages/EventsPage"))

const MainContent = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/booking" component={BookingPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/events" component={EventsPage} />
        </Switch>
      </Suspense>
    </>
  )
}

export default MainContent
