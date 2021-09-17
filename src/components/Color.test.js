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
    const setMock = jest.fn();

    render(<Color color={color} deleteColor={deleteMock} toggleEdit={toggleMock} setEditColor={setMock}/>);

    const deleteItem = screen.queryByTestId('delete');
    userEvent.click(deleteItem);

    expect(deleteMock).toBeCalled();
    expect(toggleMock).toBeCalled();
});

test("Executes setEditColor and toggleEdit when color div is clicked", () => {
    const setMock = jest.fn();
    const toggleMock = jest.fn();
    const deleteMock = jest.fn();

    render(<Color color={color} setEditColor={setMock} toggleEdit={toggleMock} deleteColor={deleteMock}/>);

    const colorItem = screen.queryByTestId('color');
    userEvent.click(colorItem);

    expect(setMock).toBeCalled();
    expect(toggleMock).toBeCalled();
});