import { render,screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom"

// we are using multiple test casesfor we use describe--- it is not nessary 
// note: we use it insted of test
describe('should check the contact load',()=>{
    test('should load contact us component', () => { 
        render(<Contact/>)
        const heading=screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
     })
     test('shouid check the button', () => { 
        render(<Contact/>)
        const button=screen.getByRole("button")
        expect(button).toBeInTheDocument()
      })
      test('shouid check the button text', () => { 
        render(<Contact/>)
        const button=screen.getByText("submit")
        expect(button).toBeInTheDocument()
      })
      test('shouid check the placeholeder text', () => { 
        render(<Contact/>)
        const inputbox=screen.getByPlaceholderText("psword")
        expect(inputbox).toBeInTheDocument()
      })
      test('shouid check the two input box', () => { 
        render(<Contact/>)
        const InputBoxs=screen.getAllByRole("textbox")
        expect(InputBoxs.length).toBe(2)
      })
      
})
