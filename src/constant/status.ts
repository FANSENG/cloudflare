const FailedSearchStatus: Status = {
	message: 'Failed to search articles',
	code: 500,
};

interface Status {
	code: number;
	message: string;
}

const InvalidRequestStatus: Status = {
	message: 'Invalid request',
	code: 400,
};

const FailedGenerateStoryStatus: Status = {
	message: 'Failed to generate story',
	code: 500,
};

export { InvalidRequestStatus, FailedGenerateStoryStatus, FailedSearchStatus };
