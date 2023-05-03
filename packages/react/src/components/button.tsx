import { ComponentProps, ElementType } from "react"
import { styled } from "../styles"

export const Button = styled("button", {
    all: "unset",
    borderRadius: "$sm",
    fontSize: "$sm",
    fontWeight: "$medium",
    fontFamily: "$default",
    textAlign: "center",
    minWidth: 120,
    boxSizing: "border-box",
    padding: "0 $4",

    transition: "all ease .2s",
  
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "$2",
  
    cursor: "pointer",
  
    svg: {
        width: "$4",
        height: "$4",
    },

    "&:disabled": {
        backgroundColor: "$gray300",
        color: "$black",
        cursor: "not-allowed",
    },

    "&:focus": {
        boxShadow: "0 0 0 2px $colors$gray100",
    },

    variants: {
        type: {
            primary: {
                backgroundColor: "$brand-mauve",
                color: "$brand-martini",
                
                "&:not(:disabled):hover": {
                    backgroundColor: "$brand-martini",
                    color: "$brand-mauve",
                },
            },
            secondary: {
                backgroundColor: "$gray700",
                color: "$gray300",
                
                "&:not(:disabled):hover": {
                    backgroundColor: "$gray300",
                    color: "$gray700"
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
    },
    defaultVariants: {
        type: "primary",
        size: "small",
    },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}

Button.displayName = "Button"