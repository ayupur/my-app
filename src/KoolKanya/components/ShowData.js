import React from 'react';

export default function MovieList({data}) {

    return (
        <div className="container home">
            <div className="row h6 text-white bg-primary mb-3 text-wrap d-none d-sm-flex">
                <div className="col text-center">S.No.</div>
                <div className="col text-center">Title</div>
                <div className="col text-center">Description</div>
                <div className="col text-center">Program Type</div>
                <div className="col text-center">Images</div>
                <div className="col text-center">Release Year</div>
            </div>
            {
                data && data.map((item, index) => {
                    return (
                        <div className="row mt-5" key={index}>
                            <div className="col-12 col-sm text-center" data-title="Title">{index + 1}</div>
                            <div className="col-12 col-sm text-center" data-title="Title">{item.title}</div>
                            <div className="col-12 col-sm text-center" data-title="Description">{item.description}</div>
                            <div className="col-12 col-sm text-center" data-title="Program Type">{item.programType}</div>
                            <div className="col-12 col-sm text-center" data-title="Images">
                                <img src={item.images['Poster Art'].url} alt={item.name} className="img-fluid" />
                            </div>
                            <div className="col-12 col-sm text-center" data-title="Release Year">{item.releaseYear}</div>

                        </div>
                    );
                })
            }
        </div>
    );
}