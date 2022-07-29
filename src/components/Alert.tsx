export const Alert: React.FC = () => (
  <div className="fixed bottom-3 left-0 animate-fadeOut md:right-3 md:left-auto">
    <div className="alert alert-success shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>購入申請が完了しました</span>
      </div>
    </div>
  </div>
)
