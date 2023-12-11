import axios from 'axios';


export async function dataFetcher(res, req) {
	const options = {
		method: 'POST',
		url: 'https://leetcode.com/graphql',
		headers: {
			'content-type': 'application/json'
		},
		data: {
			query: `{
                matchedUser(username: "balaji2002") {
                    username
                    submitStats: submitStatsGlobal {
                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                            }
                        }
                    }
            }`
		}
	};
	axios
		.request(options)
		.then(function (response) {
			console.log(response.data); // Response
		})
		.catch(function (error) {
			console.error(error);
		});
}