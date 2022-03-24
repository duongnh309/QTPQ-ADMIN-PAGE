import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import CommunityPage from "./pages/CommunityPage";
import ConsultingPage from "./pages/ConsultingPage";
import GentlementPage from "./pages/GentlementPage";
import KnowledgePage from "./pages/KnowledgePage";

GentlementStylezFeature.propTypes = {};

function GentlementStylezFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route
          path="/gentlement/knowledge"
          render={() => {
            return <KnowledgePage />;
          }}
        />
        <Route
          path="/gentlement/community"
          render={() => {
            return <CommunityPage />;
          }}
        />
        <Route
          path="/gentlement/style"
          render={() => {
            return <ConsultingPage />;
          }}
        />

        <Route
          path="/gentlement"
          exact
          render={() => {
            return <GentlementPage />;
          }}
        />

        {/* <Route path="/checkout/cart" component={ShoppingCart} />
                <Route path="/checkout/history" key={nanoid()} component={OrderHistory} />
                <Route path="/checkout/history/detail" key={nanoid()} component={OrderHistory} /> */}
      </Switch>
    </div>
  );
}

export default GentlementStylezFeature;
