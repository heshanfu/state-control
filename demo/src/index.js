import React, { Component } from 'react'
import { render } from 'react-dom'
import _ from 'lodash'

import { Check, Connector, Input, Radio, SettersBlock } from '../../src'
import './style.css'

const LABELS_FOR_ITERATIONS = {
    number: 'N',
    plus: '+',
    multiplyTo: '×',
}

const IDS = {
    divider: 'divider',
    decimalMark: 'decimalMark',
}

const LABELS = {
    [IDS.divider]: '÷',
    [IDS.decimalMark]: 'Decimal mark for inputs and the result',
}

const DIVIDERS = [2, 4, 8, 10]

const DECIMAL_MARKS = ['.', ',', '·']

const PRESETS = [
    {
        text: 'Default',
        params: {
            isReadonly: false,
            withDefault: true,
            number: 2,
            plus: 3.6,
            multiplyTo: 4,
            [IDS.divider]: DIVIDERS[0],
            [IDS.decimalMark]: DECIMAL_MARKS[0],
        },
    },
    {
        text: '1, 2, 3, 4',
        params: {
            number: 1,
            plus: 2,
            multiplyTo: 3,
            [IDS.divider]: DIVIDERS[1],
        },
    },
    {
        text: 'Other numbers',
        params: {
            number: 100,
            plus: 25,
            multiplyTo: 2,
            [IDS.divider]: DIVIDERS[3],
        },
    },
]

class Demo extends Component {
    state = PRESETS[0].params

    handleSave = (name, value) => {
        this.setState({ [name]: value })
    }

    formatNumber = (number) => number.toString().replace('.', this.state.decimalMark)

    getCalculated = () => this.formatNumber(
        (this.state.number + this.state.plus * this.state.multiplyTo) / this.state.divider
    )

    getResult = () => `(${this.formatNumber(this.state.number)} ${LABELS_FOR_ITERATIONS.plus} ${
        this.formatNumber(this.state.plus)} ${LABELS_FOR_ITERATIONS.multiplyTo} ${
        this.formatNumber(this.state.multiplyTo)}) ${LABELS.divider} ${this.formatNumber(this.state.divider)} = ${
        this.getCalculated()}\n${
        this.state.withDefault ? 'Inputs with default numbers' : 'Inputs without default numbers'}`

    render () {
        return (
            <div className="example">
                <h1>{'StateControl Demo'}</h1>
                <h2>{'Some presets'}</h2>
                <SettersBlock
                    setters={PRESETS}
                    setHandler={this.handleSave}
                />
                <h2>{'State control'}</h2>
                <Connector
                    state={this.state}
                    onChange={this.handleSave}
                    defaultNum={this.state.withDefault ? 1 : null}
                    decimalMark={this.state.decimalMark}
                >
                    <Check
                        id="isReadonly"
                        label="Readonly inputs"
                    />
                    <Check
                        id="withDefault"
                        label="Inputs with default numbers"
                    />
                    {_.reduce(LABELS_FOR_ITERATIONS, (result, label, id) => result.concat(
                        <Input
                            key={id}
                            id={id}
                            label={label}
                            readOnly={this.state.isReadonly}
                        />
                    ), [])}
                    {LABELS.divider}
                    <Radio
                        id={IDS.divider}
                        values={DIVIDERS}
                    />
                    {LABELS.decimalMark}
                    <Radio
                        id={IDS.decimalMark}
                        values={DECIMAL_MARKS}
                    />
                </Connector>
                <h2>{'Result'}</h2>
                <Input
                    id="isReadonly"
                    multiLine
                    value={this.getResult()}
                    readOnly
                    style={{ width: '300px' }}
                />
                <h2>{'Source code and documentation'}</h2>
                <ul>
                    <li><a href="https://github.com/bouvens/state-control">{'Github'}</a></li>
                    <li><a href="https://www.npmjs.com/package/state-control">{'npm'}</a></li>
                </ul>
            </div>
        )
    }
}

render(<Demo />, document.querySelector('#demo'))