import { ComponentProps, ElementType } from "react"
import { styled } from "../styles"

export const Button = styled("button", {
    backgroundColor: "$lemon-green-mid",
    borderRadius: "4px",
    fontSize: "13px",
    padding: "10px 15px",
    "&:hover": {
        backgroundColor: "$lemon-green-light",
    },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}

Button.displayName = "Button"