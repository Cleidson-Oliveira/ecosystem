import { ComponentProps, ElementType } from "react"
import { styled } from "../styles"

export const Button = styled("button", {
    borderRadius: "4px",
    fontSize: "13px",
    padding: "10px 15px",
    border: "none",
    color: "white",
    cursor: "pointer",

    variants: {
        type: {
            primary: {
                backgroundColor: "$minte-green-dark",

                "&:hover": {
                    backgroundColor: "$minte-green-mid",
                },
            },
            secondary: {
                backgroundColor: "$green900",
                
                "&:hover": {
                    backgroundColor: "$green700",
                },
            },
        },
        size: {
            small: {
                height: 38,
            },
      
            big: {
                height: 46,
            },
        },
    }
});

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}

Button.displayName = "Button"