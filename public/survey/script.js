Survey
    .StylesManager
    .applyTheme("modern");

    var json = {
        // pages: [
        //    {
               questions: [
                   {
                    type: "matrix",
                    name: "Quality",
                    title: "Please indicate if you agree or disagree with the following statements",
                    columns: [
                        {
                            value: 1,
                            text: "Strongly Disagree"
                        },{
                            value: 2,
                            text: "Disagree"
                        },{
                            value: 3,
                            text: "Neutral"
                        },{
                            value: 4,
                            text: "Agree"
                        },{
                            value: 5,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [
                        {
                            value: "impact",
                            text: "Was the impact positive towards the service?"
                        },{
                            value: "does what it claims",
                            text: "Was the quality of the service upto the mark?"
                        },{
                            value: "better then others",
                            text: "Service is better than other service in the market"
                        },{
                            value: "easy to use",
                            text: "Service is easy to use"
                        }
                    ]
                   },{
                    type: "rating",
                    name: "satisfaction",
                    title: "How satisfied are you with the Service?",
                    isRequired: true,
                    mininumRateDescription: "Not Satisfied",
                    maximumRateDescription: "Completely satisfied"
                   },{
                    type: "rating",
                    name: "recommend friends",
                    visibleIf: "{satisfaction} > 3",
                    title: "How likely are you to recommend the Service to a friend or co-worker?",
                    mininumRateDescription: "Will not recommend",
                    maximumRateDescription: "I will recommend"
                   },{
                    type: "comment",
                    name: "suggestions",
                    title: "What would make you more satisfied with the Service?"
                //    }
            //    ]
        }, 
        //        {
        //     questions: [
                {
                    type: "radiogroup",
                    name: "price to competitors",
                    title: "Compared to our competitors, do you feel the Service is",
                    choices: ["Priced about the same", "More expensive", "Not sure"]
                }, {
                    type: "radiogroup",
                    name: "price",
                    title: "Do you feel our current price is merited by the current market?",
                    choices: ["correct|Yes, the price is about right", "high|No, the price is too high"]
                }, {
                    type: "multipletext",
                    name: "pricelimit",
                    title: "What is the... ",
                    items: [
                        {
                            name: "mostamount",
                            title: "Most amount you would pay"
                        }, {
                            name: "leastamount",
                            title: "The least amount you would feel comfortable paying"
                        }
                    ]
         //       }
         //   ]
        }, 
        
  //      {
    //        questions: [
                {
                    type: "text",
                    name: "email",
                    title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
                }
            ]
  //      }
  //  ]
};
        
    


    window.survey = new Survey.Model(json);
    
$("#surveyElement").Survey({model: survey});