import classNames from "classnames";
import React from "react";

function ColumnBlue({ CusStyle }) {
    return (
        <div className={classNames(CusStyle, "h-3/6 w-15 absolute bg-gradient-to-b from-[#4c7798] to-[#143446]")}></div>
    );
}

export default ColumnBlue;
