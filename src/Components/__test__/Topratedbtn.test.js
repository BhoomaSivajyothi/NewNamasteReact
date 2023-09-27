import { render,screen ,fireEvent} from "@testing-library/react"
import {Body} from "../Foodbody"
import { act } from "react-dom/test-utils" 
import {MOCK_DATA} from "../mocks/resListDataMock.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import { Card } from "../Foodcard"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
      })
})
  

test('should check the toprated', async () => { 
    await act(async () =>render( 
        <BrowserRouter>
          <Body/>
        
        </BrowserRouter>
    
    ))
    // const Beforefilter=screen.getByTestId('rescard')
    // expect(Beforefilter.length).toBeInTheDocument(1)
     const  topratedbtn = screen.getByRole("button",{name:"Test filter data"})
     expect(topratedbtn).toBeInTheDocument()
    //   fireEvent.click(topratedbtn)
    //  const cardAfterfilter=screen.getAllByTestId("rescards")
    //  expect(cardAfterfilter.length).toBe(4)
    
})