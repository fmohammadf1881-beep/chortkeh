package ir.chortkeh.app;
import android.app.Activity; import android.content.Intent; import android.graphics.*; import android.graphics.drawable.GradientDrawable;
import android.net.Uri; import android.os.Bundle; import android.view.*; import android.webkit.*; import android.widget.*;
public class MainActivity extends Activity {
  WebView w; LinearLayout sp;
  @Override protected void onCreate(Bundle b) {
    super.onCreate(b);
    FrameLayout root = new FrameLayout(this);
    w = new WebView(this); WebSettings s = w.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true);
    sp = new LinearLayout(this); sp.setOrientation(LinearLayout.VERTICAL); sp.setGravity(Gravity.CENTER);
    sp.setBackground(new GradientDrawable(GradientDrawable.Orientation.TL_BR, new int[]{0xFF0F172A, 0xFF1E40AF}));
    ImageView im = new ImageView(this); im.setImageResource(R.drawable.icon);
    LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(240, 240); lp.bottomMargin = 36; sp.addView(im, lp);
    TextView t1 = new TextView(this); t1.setText("چرتکه"); t1.setTextColor(Color.WHITE); t1.setTextSize(26); t1.setTypeface(null, Typeface.BOLD); t1.setGravity(Gravity.CENTER); sp.addView(t1);
    TextView t2 = new TextView(this); t2.setText("جعبه ابزار هوشمند محاسباتی"); t2.setTextColor(0xFFCBD5E1); t2.setTextSize(14); t2.setGravity(Gravity.CENTER);
    LinearLayout.LayoutParams lp2 = new LinearLayout.LayoutParams(-2, -2); lp2.topMargin = 10; lp2.bottomMargin = 50; sp.addView(t2, lp2);
    ProgressBar pb = new ProgressBar(this); sp.addView(pb, new LinearLayout.LayoutParams(90, 90));
    w.setWebViewClient(new WebViewClient() {
      @Override public void onPageFinished(WebView v, String u) { sp.animate().alpha(0f).setDuration(400).withEndAction(() -> sp.setVisibility(View.GONE)); }
      @Override public boolean shouldOverrideUrlLoading(WebView v, String u) { if (u.contains("github.io")) return false; startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(u))); return true; }
    });
    root.addView(w); root.addView(sp); setContentView(root);
    w.loadUrl("https://fmohammadf1881-beep.github.io/chortkeh/");
  }
  @Override public void onBackPressed() { if (w != null && w.canGoBack()) w.goBack(); else super.onBackPressed(); }
}
