import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FaClock, FaArrowLeft, FaMapMarkerAlt, FaSuitcase, FaCheckCircle } from "react-icons/fa";
import api from "../services/api";
import DOMPurify from "dompurify";

const JobDetail = () => {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/job/${slug}`);
        setJob(response.data.data);
      } catch (err) {
        setError("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [slug]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <Container className="py-5 text-center" style={{ marginTop: "100px" }}>
        <p className="text-danger fs-5 mb-3">{error || "Job not found"}</p>
        <Link to="/careers" className="btn btn-outline-dark rounded-pill px-4">
          <FaArrowLeft /> Back to Careers
        </Link>
      </Container>
    );
  }

  return (
    <div className=" min-vh-100 mb-20 mt-10">
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
              style={{ marginTop: "100px" }}
            >
              <div className="card-body p-5">
                {/* Title */}
                <h1 className="fw-bold mb-3 h1">{job.title}</h1>

                {/* Meta Info */}
                <div className="d-flex align-items-center text-muted mb-4 flex-wrap">
                  {job.department && (
                    <span className="me-4 d-flex align-items-center">
                      <FaSuitcase className="me-2 text-secondary" />
                      {job.department}
                    </span>
                  )}
                  {job.employmentType && (
                    <span className="me-4 d-flex align-items-center">
                      <FaClock className="me-2 text-secondary" />
                      {job.employmentType}
                    </span>
                  )}
                  {job.location && (
                    <span className="me-4 d-flex align-items-center">
                      <FaMapMarkerAlt className="me-2 text-secondary" />
                      {job.location} {job.isRemote ? "(Remote)" : ""}
                    </span>
                  )}
                </div>

                {/* Salary */}
                {job.salary && (job.salary.min || job.salary.max) && (
                  <p className="fs-6 text-dark mb-4">
                    <strong>💰 Salary:</strong> {job.salaryRange}
                  </p>
                )}

                {/* Short Description */}
                {job.shortDescription && (
                  <p className="lead text-secondary mb-4">{job.shortDescription}</p>
                )}

                {/* Full Description */}
                {job.fullDescription && (
                  <div
                    style={{ whiteSpace: "pre-wrap" }}
                    className="mb-4 fs-5 lh-lg content"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(job.fullDescription),
                    }}
                  />
                )}

                {/* Requirements */}
                {job?.requirements && (
                  <div className="mt-4">
                    <h5 className="fw-bold mb-3">Requirements</h5>
                    <ul className="list-unstyled">
                      {(Array.isArray(job.requirements)
                        ? job.requirements
                        : job.requirements.split(",")
                      )
                        .filter(Boolean)
                        .map((req, i) => (
                          <li key={i} className="mb-2 d-flex align-items-center">
                            <FaCheckCircle className="text-success me-2"  size={18} />
                            {req.trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* Responsibilities */}
                {job?.responsibilities && (
                  <div className="mt-4">
                    <h5 className="fw-bold mb-3">Responsibilities</h5>
                    <ul className="list-unstyled">
  {(Array.isArray(job.requirements)
    ? job.requirements
    : (job.requirements || "").split(",")
  )
    .filter(Boolean)
    .map((req, i) => (
      <li
        key={i}
        className="mb-2 d-flex align-items-start"
        style={{ fontSize: "16px", lineHeight: "1.6" }}
      >
        <FaCheckCircle
          className="text-primary me-2 flex-shrink-0"
          size={18}   // 👈 fixed consistent size
        />
        <span>{req.trim()}</span>
      </li>
    ))}
</ul>

                  </div>
                )}

                {/* Tags */}
                {Array.isArray(job.tags) && job.tags.length > 0 && (
                  <div className="mt-4">
                    {job.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        bg="light"
                        text="dark"
                        className="me-2 px-3 py-2 rounded-pill shadow-sm mb-3"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Apply Button */}
                <div className="mt-3 mb-3">
                    <Button
                    href={job.applyLink}
                    target="_blank"
                    type="submit"
                    variant="primary"
                    className="rounded-pill px-4 comment "
                  >Apply Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <div className="position-absolute top-20 left-0 m-3">
                    <Link
                      to="/careers"
                      className="btn btn-light rounded-pill shadow-sm d-flex"
                    >
                    <div style={{marginRight:"5px",paddingTop:"4px"}}> <FaArrowLeft /></div> <div> Back</div>
                    </Link>
                  </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobDetail;
