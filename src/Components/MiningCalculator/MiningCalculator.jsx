import React from 'react'
import { Grid, Card } from '@material-ui/core';

//css file
import "./MiningCalculator.css";

function MiningCalculator(props) {

    //local array
    const packagedata = [
        { detail: "Day" },
        { detail: "Month" },
        { detail: "Year" },
        { detail: "Year 2" },

    ]

    return (
        <>
            <Grid className="Component_main_grid">
                {packagedata.map((item, index) => (
                    <Grid item md={3}>
                        <Card className="p-2 m-2 Card_shadow mining_calculator">
                            <div className="text-center">
                                <div>
                                    <strong>{item.detail}</strong>
                                    <hr/>
                                    <div className="mt-4">$</div>
                                    <div className="mt-2">0.00</div>
                                    <hr style={{width:"80%"}}/>
                                    <div className="mt-2">BTC</div>
                                    <div className="mt-2 mb-2">0.000000</div>
                                </div>


                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>
    )
}

export default MiningCalculator
