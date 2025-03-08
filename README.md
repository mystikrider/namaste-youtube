# Namaste Youtube

execute - npx create-react-app namaste-youtube

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## Redux

maintain redux state at comp level
    eg: <header><sideBar> toggle

## Youtube vidoe api, google api key auth
keep google api keys in .ENV file

## url params
    http://localhost:3000/watch?v=FXqBNCa7AwM
    const [searchParams] = useSearchParams()
    searchParams.get("v) = "FXqBNCa7AwM"

## Search bar with debouncing and API Cache
    api calls for every keystroke in search input
    debouncing, diif btwn two ke y stokes
    performance
    if diff btwn 2 keystrokes is less than 200 ms, not call the api
    make an api call n shwo the results if > 200ms

    google search suggestions api
    https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=mohanlal

    const variable will be a whole new variable when a comp re renders

    use redux for api cache - to avoid multiple networks calls to same api
    time complexity to search inside an Array is more than to searh in an object, so object is good
    new Map() is way better than Object
    ES6 spread operator
    object.assign to merge 2 objs
    const newObj = Object.assign(obj1, obj2)

    LRU Cache means - LEAST recently used cache
    restricting num of results to 100 or 10 or 5, [100] as it grows old entries wil be removed from top

## N level nested comments - reddit
    Recurssion - calling the same comp inside comp
    Comment list insde comment list

## Live Chat
    infinite scroll (as page loads more data comes up) is way better than pagination

    Two way of live data handlinh
        Web Sockets - bi directional - like a handshake - two way data sharing once a connection is established - no interval - whatsapp, zerodha
        Api pollng - cric buzz, gmail, youtube - interval (5s, 25s for next api call) - pollig api calls and gettig data

        to prevent the dom explode ytb is deleteing coments from top after a certain period

        document.getElementByTagName("custom-class-name").length

        random name generator javascript
        js array.splice(10, 1) = length will be 10 and 1 will removed from top

## Performance
    always clear interval/timeout when u use in useEffect
    onScroll event make api calls to load data for infinit scroll