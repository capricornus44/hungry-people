import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Loader from "react-loader-spinner"

const HomePage = lazy(() => import("../../pages/HomePage"))
const AboutPage = lazy(() => import("../../pages/AboutPage"))
const TeamPage = lazy(() => import("../../pages/TeamPage"))
const BookingPage = lazy(() => import("../../pages/BookingPage"))
const MenuPage = lazy(() => import("../../pages/MenuPage"))
const GalleryPage = lazy(() => import("../../pages/GalleryPage"))
const EventsPage = lazy(() => import("../../pages/EventsPage"))
const ContactPage = lazy(() => import("../../pages/ContactPage"))

const Content = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loader className="spinner" type="ThreeDots" color="#ffd600" height={100} width={100} timeout={3000} />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/booking" component={BookingPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Suspense>
    </>
  )
}

export default Content
