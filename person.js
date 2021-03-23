exports.handleInputs = (input) => {
    let greeting = ""
    let names = ""
    let hello = "Hello, "
    let shouterCounts = 0
    let nonShouterCounts = 0
    let shouters = []
    let nonShouters = []

    for (let i = 0; i < input.length; i++) {
        if (i === input.length) {
            names += input[i].toString()
        } else {
            names += input[i].toString()
            names += ", "
        }
    }

    let splitted = names.split(", ")

    for (let i = 0; i < splitted.length - 1; i++) {

        if (splitted[i].toUpperCase() === splitted[i]) {
            shouters.push(splitted[i])
            shouterCounts++
        } else {
            nonShouters.push(splitted[i])
            nonShouterCounts++
        }

    }

    if (shouterCounts === 0 && nonShouterCounts === 0) {

        //no input
        return hello + "my friend."

    } else if (shouterCounts !== 0 && nonShouterCounts === 0) {

        //everybody are shouting
        let formattedShouters = []
        if (shouterCounts === 1) {

            //single shouter
            return hello.toUpperCase() + shouters[0] + "!"

        } else {

            //multiple shouter
            for (let i = 0; i < shouterCounts + 1; i++) {
                if (i === shouterCounts - 1) {
                    formattedShouters.push("AND ")
                    formattedShouters.push(shouters[i])
                } else {
                    formattedShouters.push(shouters[i] + ", ")
                }
            }

            greeting += hello.toUpperCase()
            for (let i = 0; i < shouterCounts + 1; i++) {
                greeting += formattedShouters[i]
            }

            greeting += "!"
            return greeting

        }

    } else if (shouterCounts === 0 && nonShouterCounts !== 0) {

        //no shouters
        let formattedNonShouters = []

        if (nonShouterCounts === 1) {

            //single non shouter
            return hello + nonShouters[0] + "."

        } else {

            //multiple non shouters
            for (let i = 0; i < nonShouterCounts + 1; i++) {
                if (i === nonShouterCounts - 1) {
                    formattedNonShouters.push("and ")
                    formattedNonShouters.push(nonShouters[i])
                } else {
                    formattedNonShouters.push(nonShouters[i] + ", ")
                }
            }

            greeting += hello
            for (let i = 0; i < nonShouterCounts + 1; i++) {
                greeting += formattedNonShouters[i]
            }

            greeting += "."
            return greeting

        }

    } else if (shouterCounts !== 0 && nonShouterCounts !== 0) {

        //shouters and non shouters
        let formattedShouters = []
        let formattedNonShouters = []

        for (let i = 0; i < nonShouterCounts; i++) {
            if (i === nonShouterCounts - 1 && nonShouterCounts !== 1) {
                formattedNonShouters.push("and ")
                formattedNonShouters.push(nonShouters[i])
            } else if (nonShouterCounts !== 1) {
                formattedNonShouters.push(nonShouters[i] + ", ")
            } else {
                formattedNonShouters.push(nonShouters[i])
            }
        }

        greeting += hello
        for (let i = 0; i < nonShouterCounts + 1; i++) {
            greeting += formattedNonShouters[i]
        }
        greeting += ". "

        for (let i = 0; i < shouterCounts; i++) {
            if (i === shouterCounts - 1 && shouterCounts !== 1) {
                formattedShouters.push("AND ")
                formattedShouters.push(shouters[i])
            } else if (shouterCounts !== 1) {
                formattedShouters.push(shouters[i] + ", ")
            } else {
                formattedShouters.push(shouters[i])
            }
        }

        greeting += "AND " + hello.toUpperCase()
        for (let i = 0; i < shouterCounts + 1; i++) {
            greeting += formattedShouters[i]
        }
        greeting += "!"

        return greeting
    }

}
