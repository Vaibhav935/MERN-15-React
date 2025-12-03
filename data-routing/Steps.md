1. Making router folder, then AppRouter.jsx as a router provider.

2. Making AppRouter our single page inside main.jsx.

3. Now inside AppRouter we will createBrowserRouter and return it through <RouterProvider> component given by react-router/dom.

4. Therefore, router and router provider setup is completed.

5. Now inside createBrowserRouter we will create an array of objects each object having an independent/individual route, containing two essential properties (i). path (ii). and element.

6. 

###### KEY:

1. Router provider does not accepts childern inside it, it is only a self closing tag that only accepts attributes like router={}.

2. createBrowserRoute is similar to <Routes></Routes> in Declarative routing.

3. and individual object inside cBR is similar to <Route> in Declarative routing. (As the attributes and keys are same -- path, -- element).
