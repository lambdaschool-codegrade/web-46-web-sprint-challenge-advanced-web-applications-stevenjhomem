import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const color = { color: "pink", code: { hex: "#FFC0CB" }, id:100};

test("Renders without errors with blank color passed into component", () => {
    const color = { color: "", code: { hex: "" }, id:100};

    render(<Color color={color}/>);
});
  
test("Renders the color passed into the component", () => {
    render(<Color color={color}/>);

    const colorItem = screen.queryByText('pink');
    expect(colorItem).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit when the 'x' icon is clicked", () => {
    const deleteMock = jest.fn();
    const toggleMock = jest.fn();

    render(<Color color={color} deleteColor={deleteMock} toggleEdit={toggleMock}/>);

    const deleteItem = screen.queryByTestId('delete');
    userEvent.click(deleteItem);

    expect(deleteMock).toBeCalled();
    expect(toggleMock).toBeCalled();
});

test("Executes setEditColor and toggleEdit when color div is clicked", () => {
    const editMock = jest.fn();
    const toggleMock = jest.fn();

    render(<Color color={color} setEditColor={editMock} toggleEdit={toggleMock}/>);

    const colorItem = screen.queryByTestId('color');
    userEvent.click(colorItem);

    expect(editMock).toBeCalled();
    expect(toggleMock).toBeCalled();
});