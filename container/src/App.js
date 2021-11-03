import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName  } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/Marketing'));
const AuthLazy = lazy(() => import('./components/Auth'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName} >
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" component={AuthLazy} />
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;
