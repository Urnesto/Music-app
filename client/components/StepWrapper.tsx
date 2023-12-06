import React from "react";
import { Container, Stepper, StepLabel, Step, Grid, Card } from "@mui/material";
interface StepWrapperProps {
    activeStep: number
}
const steps = ['Track info', 'Cover', 'Upload']
const StepWrapper: React.FC<StepWrapperProps> = ({ children, activeStep }) => {

    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{steps}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent={'center'} style={{ margin: '70px 0', height: 270 }}>
                <Card style={{ width: 600 }}>
                    {children}
                </Card>
            </Grid>
        </Container >
    )
}
export default StepWrapper
