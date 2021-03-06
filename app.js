$(() => {
    console.log(`I am connected!`)
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/12ayaNOj50jTxSo0pVE2Rl60CJYdHl0UspqmoAOqjSmY/edit?usp=sharing'
    const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12ayaNOj50jTxSo0pVE2Rl60CJYdHl0UspqmoAOqjSmY/od6/public/values?alt=json'
    const $projectsLinks = $(".portfolio-projects")
    $.ajax({
        url: sheetAsJSON
    }).then( data => {
        // console.log('data', data)
        const projects = data.feed.entry.map( project => {
            return {
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                description: project.gsx$description.$t,
                url: project.gsx$url.$t
            }
        }) // end of the map
        app(projects)
    })
    // .catch is for  handling errors
    .catch( (err => console.log('err', err)))




    function app(projectsArr) {
        // console.log('app - projectsArr', projectsArr)
        projectsArr.forEach( project => {
            let title = $('<div>').text(project.title).addClass('project-card')
            let image = $('<img>').attr('src', project.image).attr('alt', 'Project Image').addClass('project-image')
            let description = $('<p>').text(project.description).addClass('project-desc')
            let url = $('<a>').attr('href', project.url).text('VIEW').addClass('project-link')
            $projectsLinks.append(title)
            title.prepend(image).append(description).append(url)
        })
    }
})

