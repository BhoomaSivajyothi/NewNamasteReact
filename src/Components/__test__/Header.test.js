import { render,screen,fireEvent } from "@testing-library/react"
import { Header } from "../Foodheader"
import { Provider } from "react-redux"
import { AppStore } from "../../utils/Appstore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
it('should load header component with a login button', () =>{
   render(
   <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
   </Provider>
   </BrowserRouter>

   )
   const loginbutton = screen.getByRole("button")
   expect(loginbutton).toBeInTheDocument()
}),

// another way to check button by using getByText--but is not goot way
it('should load header component with a check button by using getbytext login button', () =>{
   render(
   <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
   </Provider>
   </BrowserRouter>

   )
   const loginbutton = screen.getByText("login")
   expect(loginbutton).toBeInTheDocument()
})
// if having multiple button in that we checked single button
it('should load header component with a  check the single button', () =>{
   render(
   <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
   </Provider>
   </BrowserRouter>

   )
   const loginbutton = screen.getByRole("button" ,{name:"login"})
   expect(loginbutton).toBeInTheDocument()
})
// cart checking
it('should load header component with a  check the cart items', () =>{
   render(
   <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
   </Provider>
   </BrowserRouter>

   )
   const cartitems =screen.getByText("Cart:0items" )
   expect(cartitems).toBeInTheDocument()
})
//using rejex
it('should load header component with a  check the cart items', () =>{
   render(
   <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
   </Provider>
   </BrowserRouter>

   )
   const cart =screen.getByText(/Cart/ )
   expect(cart).toBeInTheDocument()
})
//check the events by using fireEvent
it('should load header component with a  check the single button', () =>{
   render(
   <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
   </Provider>
   </BrowserRouter>

   )
   const loginbutton = screen.getByRole("button" ,{name:"login"})
      fireEvent.click(loginbutton)
   const logoutbutton=screen.getByRole("button",{name:"logout"})
   expect(logoutbutton).toBeInTheDocument()
})





