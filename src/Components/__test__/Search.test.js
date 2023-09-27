import { fireEvent, render ,screen} from "@testing-library/react"
import { Body } from "../Foodbody"
import {MOCK_DATA} from "../mocks/resListDataMock.json"
import { act } from "react-dom/test-utils" 
import "@testing-library/jest-dom"
import { Card } from "../Foodcard"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
      })
})
  

it("should  be load body component and check the search btn", async () =>{
    await act(async () =>render( 
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
    
    ))

    // const totalcards=screen.getAllByTestId('rescard')
    // expect(totalcards.length).toBe(1)
    const searchbtn = screen.getByRole("button" ,{name:"Search"})
    const searchInput=screen.getByTestId("searchinput")
    fireEvent.change(searchInput,{target:{value:"pizza"}})
    fireEvent.click(searchbtn)
    const cards=screen.getAllByTestId('rescard')
    expect(cards.length).toBe(1)
   
})