import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

import mockFetchColorService from '../services/fetchColorService';
jest.mock('./../services/fetchColorService')

test("renders approprate number of colors passed in through mock", async ()=> {
    mockFetchColorService.mockResolvedValueOnce({
        data:[
            { color: "red", code: { hex: "#FF0000" }, id:100},
            { color: "blue", code: { hex: "#0000FF" }, id:102},
            { color: "pink", code: { hex: "#FFC0CB" }, id:103}
        ]
    });

    render(<BubblePage/>);
    const colors = await screen.findAllByTestId("color");
    expect(colors).toHaveLength(3);
});

