import PandaGetter from "../components/PandaGetter"

const Animals = () => {

    return (
        <main className="column-center">
            <h1>Http requests test</h1>
            <div className="apiGetters">
                <PandaGetter />
                <PandaGetter />
                {/* <RaccoonGetter /> */}
            </div>
        </main>
    )
}

export default Animals