import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";

const SmurfList = (props) => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);

	return (
		<div>
			{props.isLoading ? <h2>Loading...</h2> : null}
			{props.error ? <h2>Error</h2> : null}
			{props.smurfs?.length > 0 ? (
				<div>
					{props.smurfs.map((smurf) => (
						<div>
							<h2 key={smurf.id}>
								Name: {smurf.name}
								<br />
								Age: {smurf.age}
								<br />
								Height: {smurf.height}
							</h2>
						</div>
					))}
				</div>
			) : (
				<div>
					<h2>Looks like this village is empty!<br/>
					Complete the form above to fill it with smurfs.</h2>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isLoading: state.isLoading,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
