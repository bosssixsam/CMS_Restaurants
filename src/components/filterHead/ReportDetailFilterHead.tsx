export interface IReportDetailFilterHead {
  className?: string;
  title: string;
  requiredTitle: string;
  date_title: string;
  handleBack: () => void;
}

const ReportDetailFilterHead = ({
  className = "",
  title,
  requiredTitle,
  date_title,
  handleBack,
}: IReportDetailFilterHead) => {
  return (
    <div className={`${className} flex items-center justify-between pt-[20px]`}>
      <div className="flex items-center">
        <button className="ms-1 w-10 h-10" onClick={handleBack}>
          {/* <BackIcon className="w-8 h-8" /> */}
        </button>
        <div>
          <h2 className="font-medium text-[24px]">{title}</h2>
          <h4 className="text-[1.6rem]">
            {requiredTitle}, {date_title}
          </h4>
        </div>
      </div>
      <div className="btn-wrapper flex space-x-[12px] md:space-x-[20px] lg:space-x-[24px]">
        {/* <Button className="capitalize py-[8px] px-[12px] text-[14px] h-auto" onClick={handleCSV}>
          {t("export-csv")}
        </Button>
        <Button className="capitalize py-[10px] px-[12px] text-[14px] h-auto" onClick={handleExcel}>
          {t("export-excel")}
        </Button> */}
      </div>
    </div>
  );
};

export default ReportDetailFilterHead;
