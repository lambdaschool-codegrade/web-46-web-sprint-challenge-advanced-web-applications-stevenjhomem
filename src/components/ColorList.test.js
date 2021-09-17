import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

test("Renders an empty list of colors without errors", () => {
    const colors=[];

    render(<ColorList colors={colors}></ColorList>)
});

test("Renders a list of colors without errors", () => {
    const colors = [
        {
            color: 'pink',
            code: {
                hex: "#FFC0CB", 
            },
            id: 100
        },
        {
            color: 'blue',
            code: {
                hex: "#0000FF", 
            },
            id: 101
        },
    ];

    render(<ColorList colors={colors}></ColorList>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={[]} editing={true}/>);
    let editMenu = screen.queryByTestId('edit_menu');
    expect(editMenu).toBeInTheDocument();

    rerender(<ColorList colors={[]} editing={false}/>);
    editMenu = screen.queryByTestId('edit_menu');

    expect(editMenu).not.toBeInTheDocument();
});
