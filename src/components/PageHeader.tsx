interface PageHeaderProps {
  title: string;
}
export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="page-header mb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
