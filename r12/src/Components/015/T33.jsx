function T33({ setShowCircle, showCircle, dir }) {

    return (
        <div className="container">
            {(dir ? showCircle : !showCircle) ? <div className="ap" onClick={() => setShowCircle(c => !c)}></div> : null}
        </div>
    )
}

export default T33;