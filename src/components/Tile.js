import React from "react";

export const Tile = ({ tileData, isEnemyBoard, showShips, fire }) => {
  const Element = isEnemyBoard ? "div" : "button";
  const handleFire = () => {
    if (isEnemyBoard !== true) {
      fire(tileData.position);
    }
  };

  return (
    <Element
      onClick={() => handleFire(tileData.position)}
      style={{
        padding: 0,
        height: 40,
        marginBottom: 4,
        maxWidth: 40,
        background: isEnemyBoard ? "#FF8A8A" : "#43A6C6",
        display: "grid",
        gridAutoRows: "auto",
        boxSizing: "border-box",
        gridTemplateRows: "max-content",
        gridGap: 0,
        border: "0.5px solid grey",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: 12,
          width: "100%",
          height: 12,
          background: "#ffffff",
        }}
      >
        {tileData.position}
      </div>
      {tileData.fired && isEnemyBoard ? <p>{tileData.hit ? "Hit" : "Miss"}</p> : null}
      {tileData.fired && !isEnemyBoard ? <p>X</p> : null}
      {tileData.ship && showShips && (
        <div
          style={{
            textAlign: "center",
            fontSize: 8,
            width: "100%",
            background: "#808080",
          }}
          disabled={tileData.fired}
        >
          {tileData.shipName}
        </div>
      )}
    </Element>
  );
};
