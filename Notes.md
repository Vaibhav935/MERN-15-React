Jordan Wackey

Fax JS (Virtual DOM)

Process - recounciliation ( Diffing Algo (Compare real and virtual DOM) )

React Fiber (2024)

\- Makes react faster because it breakes page into small chuncks

# 1 Props Drilling

# 2 Two Way Binding {

    1.
    2.
    3.

}

# 3 State lifting up

# 4 React Hook Form

Router provider apne andar childern nahi leta

-- ROUTES = CREATEBROWSERROUTER
-- ROUTE = ANDAR KE OBJECT

# Optimization

images - .webp, .avif
videos - webm

1. react.memo - memoization - tosave - tocache

-> react.memo only memoizies component
-> useCallback memoizies normal function

useCallback fn return krta hai

useMemo, Debouncing, Thottering

useMemo have storage to store any value useCallback does not, useCallback only have one storage to store reference/address.

1. React.memo - Controlls components, memoize
2. useCallback - Controlls fn, memoize fn
3. useMemo - Controlls value, memoize value

# Code Spitting

Suspense, fallbace, lazy

# Tgrottling

Debouncing

# Redux - Toolkit

Store banata hai Redux toolkit (store, slices)
Serve krta hai React Redux (provider under main (app wrap krna ))

# Setps

1.  /src/(app/store)/store.jsx -> Configuration file (accepts reducer (yanha register krte hain (registery)) ) (store)
2.  Make reducer(react-redux)/ slice(redux-toolkit) -> (toolkit banaige reducer using slices)
3.  /src/(features/reducer(folder)) -> one file for one reducer/ slice -> using createSlice {

    ## Accepts three things

        1. Name
        2. initialState (object)
        3. Actions (reciepies) (actions aate hain reducer ke andar) {
            Action take two parameter's (state, action) {
                state -> initial state
            }
        }

    }


# Tanstack Query

1. UI
2. Implement Redux
3. Routing
4. Authentication
5. React Hook Form, Two way binding, local storage
6. API call
7. Tanstack Query
8. Configuration - axios instance (folder) (axios removal)
9. apis folder (folder)
10. custom hooks (folder) 

1. First create 2 pages home and users in routing 
2. ⁠now split the code ----
3. ⁠make axiosInstance file and use them
4. ⁠now make apis folder with seperate files of users and products 
5. ⁠shift the api calls funtion inside these files
6. ⁠now use tanstack query---
7. ⁠initial a wrpper first in main file
8. ⁠use usequery method pass querykey and queryfn 
9. ⁠call api funtion in queryfn 
10. ⁠then destructure the data and ispending state from usequery
11. ⁠use them in your ui 
12. ⁠now make CustomHook for tanstack api call
13. ⁠make seperate hooks file for usrs and products
14. ⁠now shift your usequery fun inaide the customHook files 
15. ⁠make sure to exports all the funtions and hooks
16. ⁠now only call your custom hook funtions for data and ispending.
17. ⁠make sure to give staletime according to need🫡👍🏻


# Tanstack Query steps
1. Install - npm i @tanstack/react-query
2. Initialize query clint using query clind provider
3. useQuery - where ever api is used


# Interceptors --
    Middleware - Middleman - beech ka security system
    (vaise to middleware bolte hain lkn axios ke andar interceptors kahate hain)