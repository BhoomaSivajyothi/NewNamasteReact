import { render ,screen} from "@testing-library/react"
import { Card } from "../Foodcard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withveglable } from "../Foodcard"


test("should test the  card loaded" ,()=>{
  render(<Card resData={MOCK_DATA} />)
  const name=screen.getByText("Soul Rasa")
  expect(name).toBeInTheDocument()
})
test('should load the withveglabel hoc', () => { 
    render(<withveglable Card={MOCK_DATA}/>)
    
 })